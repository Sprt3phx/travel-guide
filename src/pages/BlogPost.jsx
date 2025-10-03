import { useParams, Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: "Top 5 Destinations for 2025",
    date: "Jan 10, 2025",
    content:
      "Here’s a deeper dive into the hottest destinations for 2025... (you can add paragraphs, tips, or images here).",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Travel Smarter, Not Harder",
    date: "Feb 5, 2025",
    content:
      "Long-form advice about smarter travel: packing light, using points, booking smarter...",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Packing Hacks for Frequent Travelers",
    date: "Mar 12, 2025",
    content:
      "Here’s the full guide to packing hacks — from rolling clothes to using compression bags...",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Cultural Etiquette Tips for Travelers",
    date: "Apr 2, 2025",
    content:
      "Learn greetings, table manners, and do’s & don’ts from cultures around the world.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];


export default function BlogPost() {
    const { id } = useParams()
    const post = posts.find(p => p.id === parseInt(id))

    if (!post) {
        return (
            <p>Post not found. Go back to the <Link to="/blog" className="text-blue-500 hover:underline">blog</Link>.</p>
        )
    }

    return (
        <div>
            <img src={post.image} alt={post.title} 
                className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold my-4">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="mb-6">{post.content}</p>
            <Link to="/blog" className="text-blue-500 hover:underline">Back to Blog</Link>
        </div>
    )
}
