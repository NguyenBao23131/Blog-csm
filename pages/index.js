import Head from 'next/head'

const posts = [
  {title: "React testing", excerpt:   "Learn React testing"},
  {title: "React with Tailwind", excerpt: "Learn React with Tailwind"}
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8 bg-gray-300'>
      <Head>
        <title>Blog-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>

            </div>
        </div>
        
      </div>
    </div>
  )
}
