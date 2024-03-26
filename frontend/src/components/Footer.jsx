import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	const curentYear = new Date().getFullYear();
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<p>Developed By Selim Agovic &copy; {curentYear}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
