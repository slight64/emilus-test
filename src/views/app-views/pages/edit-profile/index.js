import React, { useEffect, useState } from 'react';
import { Form, Avatar, Button, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAction } from 'redux/actions/Users';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MOCK_AVATAR } from 'assets/data/constants';
import { values } from 'lodash';
import Loading from 'components/shared-components/Loading';
import { SEND_USER_DATA } from 'redux/constants/Users';

const EditProfile = () => {
  const [userState, setUserState] = useState(null);
  const [userAvatar, setUserAvatar] = useState(MOCK_AVATAR);

  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.editingUser);
  const loading = useSelector((state) => state.users.loading);
  const history = useHistory();
  const onFinish = () => {
    setUserState({
      name: values.name,
      email: values.email,
      username: values.username,
      company: {
        name: values.company,
      },
      phone: values.phone,
      website: values.website,
      address: {
        street: values.street,
        suite: values.suite,
        city: values.city,
        zipcode: values.zipcode,
      },
    });
  };

  const onUploadAvatar = () => {
    setUserAvatar(MOCK_AVATAR);
  };

  const onRemoveAvatar = () => {
    setUserAvatar('');
  };
  const onSaveChanges = () => {
    dispatch({ type: SEND_USER_DATA, history });
  };

  useEffect(() => {
    dispatch(loadUserAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  if (loading) return <Loading />;

  if (userState === null) return <Loading />;

  return (
    <>
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      >
        <Avatar size={90} src={userAvatar} icon={<UserOutlined />} />
        <div className="ml-md-3 mt-md-0 mt-3">
          <Button type="primary" onClick={onUploadAvatar}>
            Change Avatar
          </Button>

          <Button className="ml-2" onClick={onRemoveAvatar}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: userState.name,
            email: userState.email,
            username: userState.username,
            company: userState.company.name,
            phoneNumber: userState.phone,
            website: userState.website,
            street: userState.address.street,
            suite: userState.address.suite,
            city: userState.address.city,
            zipcode: userState.address.zipcode,
          }}
          onFinish={onFinish}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Company" name="company">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Street" name="street">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Suite" name="suite">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="ZIP Code" name="zipcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit" onClick={onSaveChanges}>
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
