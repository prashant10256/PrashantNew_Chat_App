import {Alert,Button,Form,Row,Col,Stack} from "react-bootstrap";
//prettier
const Login = () => {
    return( <>
    <Form>
        <Row style={{
            height: "100vh",
            justifyContent: "center",
            padding: "10%"
        }}> 
            <Col xs={6}>
            <Stack gap={3}>
                 <h2>Login</h2>
                 <Form.Control type="Email" placeholder="Email"/>
                 <Form.Control type="password" placeholder="password"/>
                 <Button variant="primary" type="submit">
                 Login
                 </Button>
                 <Alert variant="danger"><p>An error occured</p></Alert>
            </Stack>
            </Col>
        </Row>
    </Form>
    </>
    );
}
 
export default Login;