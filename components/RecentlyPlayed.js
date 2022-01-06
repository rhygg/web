import useSWR from 'swr';
import { SimpleGrid } from '@chakra-ui/react'
import fetcher from '../lib/fetcher';
import Track from './Track';

export default function Recently() {
  const { data } = useSWR('/api/recently-played', fetcher);

  if (!data) {
    return null;
  }

  return (
    <SimpleGrid columns={2} spacing={4} mt={8} w="100%">
      {data.tracks.map((track, index) => (
        <Track link={track.songUrl} {...track} />
      ))}
      </SimpleGrid>
  );
}