import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1200px;
`;

export const Logo = styled.div`
	img {
		height: 80px;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	button {
		background: #977d44;
		padding: 12px 28px;
		border-radius: 8px;
		color: #000;
		font-size: 16px;
		font-weight: 600;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

		&:hover {
			background: #fff;
		}
	}
`;

export const MenuItem = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;

	&.active {
    color: #977d44;
}
`;
