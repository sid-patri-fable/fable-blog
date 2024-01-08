import React from 'react'

const getLatestPosts = (manifest) => {
  const latestPosts = []
  const queue = [manifest.tree]

  while (queue.length > 0) {
    const node = queue.shift()

    if (node.nodeType === 'file' && node.ext === '.mdx' && node.pathName !== '/') {
      latestPosts.push({ ...node.frontmatter, link: node.pathName })
    }

    node.children?.forEach(child => queue.push(child))
  }

  return latestPosts
}

export default function LatestPosts(props) {
  const latestPosts = getLatestPosts(props.manifest)
  const borderColor = ['#ff5cc5', '#37b8ff', '#c24ce3', '#ffc901']

  return (
    <div style={{ marginTop: '8rem' }}>
      <h2 style={{ width: 'fit-content', margin: '0 auto', marginBottom: '3rem' }}>Latest Posts</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '2rem',
          margin: '1rem auto',
          maxWidth: '1400px'
        }}
      >
        {latestPosts.slice(0, 3).map(((post, idx) => {
          return (
            <a
              key={idx}
              href={post.link}
              style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottom: `2px solid ${borderColor[idx % 3]}`,
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.05)',
                color: "#2c2c2c"
              }}
            >
              <img
                src={post.bannerImg}
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1'
              }}>
                <div
                  style={{
                    flex: '1'
                  }}
                >
                  <p style={{ color: '#747474', marginTop: '1.2rem' }}>{post.date}</p>
                  <h2>{post.title}</h2>
                  <p>{post.subtitle}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#713aff',
                    fontWeight: '500'
                  }}
                >
                  <span>Read more</span>
                  <img
                    src='https://assets.website-files.com/632d5bc037481960cc880d53/633df61bb33515b8f0103b50_Vector.svg'
                  />
                </div>
              </div>
            </a>
          )
        }))}
      </div>
      <a
        href='/'
        style={{
          margin: '3rem auto',
          display: 'block',
          width: 'fit-content',
          color: '#fff',
          fontWeight: '600',
          backgroundColor: '#713aff',
          padding: '12px',
          borderRadius: '10px'
        }}
      >
        See more news
      </a>
    </div>
  )
}
