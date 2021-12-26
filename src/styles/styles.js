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
	.hidden { overflow: hidden; position: absolute; width: 1px; height: 1px; font-size: 1px; border: 0; white-space: nowrap; clip: rect(1px, 1px, 1px, 1px); clip-path: inset(50%); }
`