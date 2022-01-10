import { useEffect, useState} from 'react';
import { fetchData} from '../../api/fetchData';
import { ImageCard } from '../imageCard/imageCard';
import Modal from 'react-modal';
import './library.css';

export const Library = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if(!noData) {
            loadData(page);
          }
        }
      }

      useEffect(() => {
        loadData(page);
      }, []);


      const loadData = (page) => {
        setLoading(true);
        setTimeout(() => {
          fetchData(page)
            .then((res) => {
              const newPage = page + 1;
              setData([...data, ...res.data.rows]);
              setPage(newPage);
              if(res.data.rows.length===0)
                setNoData(true);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() =>{
              setLoading(false);
            })
          }
        ,1500);
      }
 const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
<div> 
    <h1>Library</h1> 
    <div className='container'>
        {data.map((item, index) => (
            <div key={index} className='thumbnail-container'>
                <ImageCard  src={item.thumbnailUrl} alt={`image ${item.lastName}`} duration={item.duration.toFixed(2)} firstname={item.firstName} lastname={item.lastName} likes={item.likes} onClick={showModal}></ImageCard>
                <Modal
      contentLabel="Modal"
      ariaHideApp={false}
      isOpen={isModalVisible}
      onRequestClose={handleCancel}
      >
     <img src={item.imageUrl} alt='image'/>
     <button onClick={handleCancel}>close</button>
    </Modal>
            </div>

        ))}
        {loading ?  <div><span>Loading data</span></div> : "" }
        {noData ? <div><span>No more data</span></div> : "" }

    </div>

</div>
)};