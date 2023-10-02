import React from 'react';
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { inkContract } from '../constants/addresses';
import inkAbi from '../constants/abis/ink.json';
import Register from './Register';
import CreatePost from './CreatePost';
import AllPost from './AllPost';

const BlogBody = () => {
  return (
    <div>
      <Register />
      <CreatePost />
      <AllPost />
    </div>
  );
};

export default BlogBody;
