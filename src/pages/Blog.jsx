import { Link } from "react-router-dom";


export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "Top 5 Destinations for 2025",
        date: "Jan 10, 2025",
        excerpt:
          "Discover the hottest places to travel in 2025 — from hidden gems to bucket list favorites.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "How to Travel Smarter, Not Harder",
        date: "Feb 5, 2025",
        excerpt:
          "Learn practical tips to make your trips smoother, cheaper, and more enjoyable.",
        image:
          "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 3,
        title: "Packing Hacks for Frequent Travelers",
        date: "Mar 12, 2025",
        excerpt:
          "Struggling with luggage? These hacks will save space and time every trip.",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        title: "Cultural Etiquette Tips for Travelers",
        date: "Apr 2, 2025",
        excerpt:
          "Avoid embarrassing mistakes abroad — learn the basics of cultural etiquette to show respect everywhere you go.",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      },
    ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Travel Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition bg-white"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}