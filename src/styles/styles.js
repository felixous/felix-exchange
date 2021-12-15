import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* { 
		margin: 0; 
		padding: 0; 
	}
	html { 
		line-height: 1.5; 
		font-size: 16px; 
		color: #303030; 
	}
	img { 
		vertical-align: top; 
	}
	ul, ol { 
		list-style: none; 
	}
	a { 
		text-decoration: none; 
		line-height: inherit; 
		font-size: inherit; 
		color: inherit; 
	}
	table { 
		width: 100%; 
		table-layout: fixed; 
		border-collapse: collapse; 
	}
	input { 
		border: none; 
		line-height: inherit; 
		font-family: inherit; 
		font-size: inherit; 
		color: inherit; 
		background: none; 
	}
	button { 
		border: none; 
		line-height: inherit;
		font-family: inherit; 
		font-size: inherit; 
		color: inherit; 
		background: none; 
		cursor: pointer; 
	}
	select { 
		appearance: none; 
		border: none; 
		line-height: inherit; 
		font-family: inherit; 
		font-size: inherit; 
		color: inherit; 
		background: none; 
	}
`