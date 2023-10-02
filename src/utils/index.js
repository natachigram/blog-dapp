import { ethers, toBigInt } from 'ethers';
import { rpcUrlsMap, supportedChains } from '../constants';
import { inkContract } from '../constants/addresses';
import inkAbi from '../constants/abis/ink.json';

export const shortenAddress = (address) => {
  if (typeof address !== 'string' || address.length !== 42) {
    throw new Error('Invalid Ethereum address');
  }

  const prefix = address.slice(0, 6);
  const suffix = address.slice(-4);
  return `${prefix}...${suffix}`;
};

export const getContract = async (address, abi, provider, withWrite) => {
  let signer;
  if (withWrite) signer = await provider.getSigner();

  return new ethers.Contract(address, abi, withWrite ? signer : provider);
};

export const getContractWithProvider = (address, abi, provider) => {
  return new ethers.Contract(address, abi, provider);
};

export const getInkContract = async (provider, withWrite) => {
  return await getContract(inkContract, inkAbi, provider, withWrite);
};

export const getCrowdfundContractWithProvider = (provider) => {
  return getContractWithProvider(crowdfundContractAddress, inkAbi, provider);
};

export const formatDate = (time) => {
  // Convert the timestamp to milliseconds by multiplying it by 1000
  const date = new Date(time * 1000);

  // Get the year, month, and day components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1 to get the correct month
  const day = date.getDate();

  // Create an array of month names to map the numeric month to its name
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the month name using the month value as an index in the monthNames array
  const monthName = monthNames[month - 1];

  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
};

export const calculateGasMargin = (value) =>
  (toBigInt(value) * toBigInt(120)) / toBigInt(100);
