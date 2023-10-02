import { inkContract } from '@/constants/addresses';
import React, { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import inkAbi from '../constants/abis/ink.json';
import toast, { Toaster } from 'react-hot-toast';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const { config } = usePrepareContractWrite({
    address: inkContract,
    abi: inkAbi,
    functionName: 'createPost',
    args: [content],
  });

  const { isSuccess, write } = useContractWrite(config);

  return (
    <div>
      <form>
        <input
          className='border-2 h-5'
          type='text'
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => write?.()}>Create Post</button>
        {isSuccess
          ? toast.success('Successfully Registered!') && <Toaster />
          : ''}
      </form>
    </div>
  );
};

export default CreatePost;
