// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



const DataObj =[
  {
    id:1,
    name:'Random'
  },
  {
    id:2,
    name:'Random'
  },
  {
    id:3,
    name:'Random'
  },
  {
    id:4,
    name:'Random'
  },
  {
    id:5,
    name:'Random'
  },
  {
    id:6,
    name:'Random'
  },
  {
    id:7,
    name:'Random'
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  res.status(200).json(DataObj)
}


