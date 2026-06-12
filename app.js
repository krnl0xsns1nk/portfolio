import express from 'express';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

const app = express();
const PORT = process.env.PORT || 3000;

const POSTS_DIR = path.join(process.cwd(), 'posts');

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use('/assets', express.static(path.join(process.cwd(), 'public/assets')));

function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
      const { data } = matter(raw);

      return {
        slug,
        title: data.title || slug,
        date: data.date
          ? new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '',
        tag: data.tag || null,
        excerpt: data.excerpt || '',
        _sortDate: data.date ? new Date(data.date) : new Date(0),
      };
    })
    .sort((a, b) => b._sortDate - a._sortDate);
}


function getPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const post = {
    slug,
    title: data.title || slug,
    date: data.date
      ? new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '',
    tag: data.tag || null,
    excerpt: data.excerpt || '',
  };

  const html = marked.parse(content);

  return { post, html };
}



app.get('/', (req, res) => {
	res.render('index');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/now', (req, res) => {
  const posts = getAllPosts();
  res.render('now', {
    posts,
    lastUpdated: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  });
});

app.get('/posts', (req, res) => {
	const posts = getAllPosts();
	res.render('posts', {
		posts
	})
});

app.get('/posts/:slug', async (req, res) => {
  const result = await getPostBySlug(req.params.slug);

  if (!result) {
    return res.status(404).render('404');
  }

  res.render('post', {
    post: result.post,
    content: result.html,
  });
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});

