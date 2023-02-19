import React from 'react'
import { useParams } from 'react-router-dom';

interface albumsType{
    desc: string
    catid: string
}

const AlbumsType = () => {
    let params = useParams();
    
    const { id } = useParams<{ id: string }>();
    const albumsType: albumsType[] = [
        { desc: 'Budapest', catid: "1" },
        { desc: 'Vina', catid: "1" },
        { desc: 'Italy', catid: "1" },
        { desc: 'tal', catid: "2" },
        { desc: 'nataly', catid: "2" },
        { desc: 'mother', catid: "3" },
        { desc: 'father', catid: "3" },
      ];

  return (
    <div style={{backgroundColor:"green"}}>albums  from {id} 
    {albumsType.filter(x=> x.catid === id ).map(album=><div>
        desc:{album.desc},
        id:{album.catid}
    <button>Buy</button>
    </div>)}
    
    </div>
  )
}

export default AlbumsType