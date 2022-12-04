import "./gallery.css";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
export default function Gallery({ fileURLs }) {
  const [layout, setLayout] = useState([]);
  const layout5Plus = ["w-3 h-2", "w-3 h-2", "w-2 h-2", "w-2 h-2", "w-2 h-2 filter"]
  const layout5 = ["w-3 h-2", "w-3 h-2", "w-2 h-2", "w-2 h-2", "w-2 h-2"]
  const layout4 = ["w-6 h-3", "w-2 h-2", "w-2 h-2", "w-2 h-2"]
  const layout3 = ["w-2 h-2", "w-2 h-2", "w-2 h-2"]
  const layout2 = ["w-3 h-2", "w-3 h-2"]
  const layout1 = ["w-6 h-3"]
  useEffect(() => {
    switch (fileURLs?.length) {
      case 1:
        setLayout(layout1);
        break;
      case 2:
        setLayout(layout2);
        break;
      case 3:
        setLayout(layout3);
        break;
      case 4:
        setLayout(layout4);
        break;
      case 5:
        setLayout(layout5);
        break;
      default:
        setLayout(layout5Plus);
        break;

    }
  }, [fileURLs])
  const showImage = (index) => {

    const gallery = fileURLs.map(item => {
      return {
        src: item,
        thumb: item
      }
    })
      //Fancybox.getInstance().jumpTo(index);
      ;
    Fancybox.show(gallery, {
      startIndex: index
    });
  }

  return (
    <div className="galleryWrapper">
      {fileURLs?.slice(0, 5).map((url, index) => {
        return (<div className={"gallery-container " + layout[index]} >
          <div key={index} className="gallery-item" onClick={() => showImage(index)}>
            <div className="image">
              <img src={url} alt="nature" />
            </div>
            {(index == 4 && fileURLs?.length > 5) && <div className="text">+{fileURLs?.length - 5}</div>}
          </div>
        </div>)
      })}
    </div>
  );
}
