```javascript
// pages/blog/[id]/page.js

import {getServerSideProps} from 'next/server';

export default function BlogPost({params}){
    return <div>Blog Post {params.id}</div> 
}

export async function getServerSideProps(context) {
    const {params} = context;
    return {
      props: {
        params: params
      }
    }
}

```