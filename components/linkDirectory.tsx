import Link from 'next/link';

const LinkDirectory: React.FC = () => {
  const links = [
    { href: 'https://tiktok.hasanabitv.com', title: 'HasTok Hub', description: 'HasanAbi TikTok clips industrial complex community hub', image: '/pics/hasan-himbo-selfie.jpg', by: { name: 'Chase Saddy', link: 'https://twitter.com/hasansproducer' } },
    { href: 'https://hasanhub.com', title: 'HasanHub.com', description: 'HasanAbi YouTube clips industrial complex community hub', image: '/pics/hasan-pink.jpg', by: { name: 'Chris', link: 'https://twitter.com/hasanthehun' } },
    { href: 'https://hasanguessr.net', title: 'HasanGuessr', description: 'Like Wordle. Guess Hasan\'s stream clip date. Daily.', image: '/pics/hasan-bandana.jpg', by: { name: 'brilliantdrink' } },
    { href: 'https://brilliantdrink.github.io/hasanabi-census/', title: 'HasanAbi Community Census', description: 'HasanAbi\'s Twitch community census.', image: '/pics/hasanabi-twitch-hogwarts.jpg', textColor: 'text-green-500', by: { name: 'brilliantdrink' } },
    { href: 'https://twitch.tv/hasanabi', title: 'Hasan\'s Twitch', description: 'Official Twitch streaming channel', image: '/pics/hasanabi-updates.jpg', by: { name: 'HasanAbi' } },
    { href: 'https://twitter.com/hasanthehun', title: 'Hasan\'s Twitter', description: 'Official Twitter', image: '/pics/hasan-rent-free-in-head-original.jpg', by: { name: 'HasanAbi' } },
    { href: 'https://instagram.com/hasandpiker', title: 'Hasan\'s Instagram', description: 'Official Instagram channel', image: '/pics/hasan-antifascist.png', by: { name: 'HasanAbi' } },
    { href: 'https://tiktok.com/hasandpiker', title: 'Hasan\'s TikTok', description: 'Official TikTok channel', image: '/pics/hasan-smiling-clip.jpg', by: { name: 'HasanAbi' } },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6 max-w-md mx-auto">
        {links.map((link, index) => (
          <div key={index} className="relative">
            <Link href={link.href} className="block">
              <div 
                className="rounded-lg shadow-lg overflow-hidden relative h-48"
                style={link.image ? { backgroundImage: `url(${link.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                <div className={`absolute inset-0 ${link.image ? '' : 'bg-gray-800'}`}>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-4">
                    <h2 className="text-2xl font-bold mb-1 text-purple-500">{link.title}</h2>
                    <p className="text-white mb-2">{link.description}</p>
                  </div>
                </div>
              </div>
            </Link>
            {link.by && (
              <div className="absolute bottom-1 right-1 text-sm text-gray-300 bg-black bg-opacity-70 px-2 py-1 rounded">
                By: {link.by.link ? (
                  <a 
                    href={link.by.link} 
                    className="text-blue-400 hover:underline" 
                    target="_blank" 
                  >
                    {link.by.name}
                  </a>
                ) : (
                  <span className="text-gray-400">{link.by.name}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkDirectory;
