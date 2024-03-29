import React, { useState } from 'react';
import '../styles/results.css';
import noResults from '../assets/twins.png';

const ResultsGrid = ({ searchResults, setDetailItem, term, lang, loading }) => {
	//handle show and hide critter name on icon hover
	const [hover, labelState] = useState({
		id: null,
		show: false,
	});

	const handleMouseOver = (id) =>
		labelState({
			id,
			show: true,
		});

	const handleMouseOut = () =>
		labelState({
			id: null,
			show: false,
		});

	//begin component render
	if (searchResults.length < 1 && term) {
		//show no search results found
		return (
			//TODO: Update styling to center image and improve visibility
			<div className='no-results'>
				<p>No critters found!</p>
				<img id='no-results-img' src={noResults} alt='No Results Found' />
			</div>
		);
	} else {
		return (
			<div className='results-wrapper'>
				{searchResults.map((creature) => {
					const { id, name, icon_uri } = creature;
					return (
						<div key={id} className='results-item'>
							{/*Label with name appears on hover */}
							{hover.id === id && (
								<div className='name-tooltip'>
									<span>{name[`name-${lang}`]} </span>
								</div>
							)}
							<img
								onMouseOver={() => handleMouseOver(id)}
								onMouseOut={handleMouseOut}
								className='search-img'
								src={icon_uri}
								alt={name['name-USen']}
								onClick={() => {
									setDetailItem(creature);
								}}
							/>
						</div>
					);
				})}
			</div>
		);
	}
};

export default ResultsGrid;
