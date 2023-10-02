import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi';
import inkAbi from '../constants/abis/ink.json';
import toast from 'react-hot-toast';
import { inkContract } from '@/constants/addresses';
import { formatDate } from '../utils/index';
import { shortenAddress } from '../utils/index';

// Define a TypeScript interface for your data
interface Post {
  id: number;
  poster: string;
  timePosted: string;
  tips: number;
  content: string;
}

const AllPost = () => {
  const [results, setResults] = useState<Post[]>([]);

  const contractRead = useContractRead({
    address: inkContract,
    abi: inkAbi,
    functionName: 'getPosts',
    args: [0, 10],
    watch: true,
    onSuccess(data: Post[]) {
      setResults(data);
    },
  });

  const newResults = results.filter((result) => {
    return result.content !== '';
  });

  return (
    <div>
      <section className='flex justify-center py-8'>
        {newResults &&
          newResults.map((post) => (
            <div className='card-container'>
              <a href=''>
                <div className='card rounded-xl p-4 border border-gray-300 hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100'>
                  <h2 className='text-black  w-64 font-bold leading-6 tracking-normal'>
                    {post.content}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {shortenAddress(post.poster)}
                  </p>
                  <div className='flex justify-between items-center'>
                    <div>{formatDate(Number(post.timePosted))}</div>
                    <div>{Number(post.tips)} Tips</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </section>
    </div>
  );
};

export default AllPost;
