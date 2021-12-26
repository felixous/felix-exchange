import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const StyledTableBox = styled.div`
	& { overflow-x: auto; }
	& table { min-width: 700px; }
	& table.min-800 { min-width: 800px; }
	& table.min-900 { min-width: 900px; }
	& table thead {}
	& table thead tr {}
	& table thead tr th { height: 48px; font-size: 13px; font-weight: 400; color: #fff; background: #606060; }
	& table thead tr th:first-child { border-radius: 4px 0 0 0; }
	& table thead tr th:last-child { border-radius: 0 4px 0 0; }
	& table tbody {}
	& table tbody tr {}
	& table tbody tr td { height: 40px; font-size: 14px; text-align: center; background: #f5f5f5; }
	& table tbody tr td.text-left { text-align: left; }
	& table tbody tr:nth-child(2n) td { background: #e9e9e9; }
	& table tbody tr td .no-result { padding: 50px 0; }
	& table tbody tr td .loading { padding: 50px 0; }
	& table tbody tr td .btn-link + .btn-link { margin-left: 4px; }
	& table tbody tr:last-child td:first-child { border-radius: 0 0 0 4px; }
	& table tbody tr:last-child td:last-child { border-radius: 0 0 4px 0; }
`;

const TableBox = () => {
	return (
		<StyledTableBox>
			<table>
				<caption className="hidden">즐겨찾는 환율 정보</caption>
				<colgroup>
					<col style={{ width: '100px'}} />
					<col />
					<col />
					<col />
					<col />
					<col />
					<col style={{ width: '180px'}} />
				</colgroup>
				<thead>
					<tr>
						<th></th>
						<th>통화</th>
						<th>국가</th>
						<th>환율</th>
						<th>전일대비</th>
						<th>등락률</th>
						<th>바로가기</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan="7">
							<Loading />
						</td>
					</tr>
					<tr>
						<td colSpan="7">
							<div className="no-result">
								즐겨찾는 통화가 없습니다 : )
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div className="bookmark-box">
								<input type="checkbox" defaultChecked />
							</div>
						</td>
						<td>USD</td>
						<td>미국</td>
						<td>1,179.80</td>
						<td><span className="point-up"><span className="icon"></span>2.00</span></td>
						<td><span className="point-up">+ 0.17%</span></td>
						<td>
							<a href="#none" className="btn btn-link">상세</a>
							<a href="#none" className="btn btn-link">계산기</a>
						</td>
					</tr>
					<tr>
						<td>
							<div className="bookmark-box">
								<input type="checkbox" defaultChecked />
							</div>
						</td>
						<td>USD</td>
						<td>미국</td>
						<td>1,179.80</td>
						<td><span className="point-equal"><span className="icon"></span>0.00</span></td>
						<td><span className="point-equal">0.00%</span></td>
						<td>
							<a href="#none" className="btn btn-link">상세</a>
							<a href="#none" className="btn btn-link">계산기</a>
						</td>
					</tr>
					<tr>
						<td>
							<div className="bookmark-box">
								<input type="checkbox" defaultChecked />
							</div>
						</td>
						<td>USD</td>
						<td>미국</td>
						<td>1,179.80</td>
						<td><span className="point-down"><span className="icon"></span>2.00</span></td>
						<td><span className="point-down">- 0.17%</span></td>
						<td>
							<a href="#none" className="btn btn-link">상세</a>
							<a href="#none" className="btn btn-link">계산기</a>
						</td>
					</tr>
				</tbody>
			</table>
		</StyledTableBox>
	);
};

export default TableBox;