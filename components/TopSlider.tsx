import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";


interface Props {

	content?: any,

}

const TopSlider: React.FC<Props> = ({ content }) => {

	const contentToArray = () => {
		if (content && content?.acf?.contents)
			return Object.keys(content?.acf?.contents)
				.map(function (key) {
					return content.acf.contents[key];
				})
		else { return [] }
	}

	const lay = contentToArray()

	console.log({ lay }); // ["hello", "this is", "javascript!"]

	const contentRender = (obj: any, i: number) => {
		if (obj && obj.type && obj.type == "image")
			return <div className="post-img-container" key={i} ><Image
				src={obj.url} className="gallery-img" layout="fill" />
				{obj.description && <p className='post-content-description'>{obj.description}</p>}</div>
		if (obj && obj.type && obj.type == "video")
			return <div key={i}><ReactPlayer
				muted
				className="video_player"
				src={obj.url}
				playsinline
				loop
			/>
				{obj.description && <p className='post-content-description'>{obj.description}</p>}</div>
		else
			return obj && <div key={i} className='post-content-container' dangerouslySetInnerHTML={{ __html: obj }} />
	}

	const renderVideo = (url: string | string[] | SourceProps[] | MediaStream | undefined) => {
		return <div className="player-wrapper">
			<ReactPlayer
				className='react-player'
				muted
				width='100%'
				height='100%'
				url={url}
				playsinline
				playing
				loop
			/>
		</div>
	}


	return (
		<>
			{lay.map((obj, i) =>
				contentRender(obj, i)
			)}
			{content?.acf?.videotop && renderVideo(content?.acf?.videotop)}
			{content?.acf?.galleria &&
				content?.acf?.galleria.map((el: any) =>
					<div key={el.id} className="post-img-container" >
						<Image src={el.url} className="gallery-img" layout="fill" />
						{el.description && <p className='post-content-description'>{el.description}</p>}
						</div>
				)}
					{content?.acf?.videobottom && renderVideo(content?.acf?.videobottom)}
		</>
	);
}

export default TopSlider;