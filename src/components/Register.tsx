import { inkContract } from '@/constants/addresses';
import React from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import inkAbi from '../constants/abis/ink.json';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { config } = usePrepareContractWrite({
    address: inkContract,
    abi: inkAbi,
    functionName: 'register',
  });

  const { isSuccess, write } = useContractWrite(config);
  //   if (isSuccess) {
  //     toast.success('Successfully Registered!');
  //   }
  return (
    <div className='flex justify-center items-center'>
      <button className='border border-3' onClick={() => write?.()}>
        Register
      </button>
      <Toaster />
    </div>
  );
};

export default Register;
