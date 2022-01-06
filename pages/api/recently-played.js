import { getRecentlyPlayed } from '../../lib/spotify'


export default async function Handler(req, res) {

   const response = await getRecentlyPlayed();
  const { items } = await response.json();
  // console.log(items[0].track.)
  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.track.artists[1] ? (track.track.artists.map((_artist) => _artist.name).join(', ')) : track.track.artists[0].name ,
   songUrl: track.track.external_urls.spotify,
   title: track.track.name,
   thumbnail: track.track.album.images[0].url,
  }));
  console.log(tracks);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  return res.status(200).json({ tracks });

}