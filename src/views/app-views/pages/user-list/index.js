import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Tag, Tooltip, message, Button, Input } from 'antd';
import { EyeOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Flex from 'components/shared-components/Flex';
import UserView from './UserView';
import { getUsersAction } from 'redux/actions/Users';
import { MOCK_AVATAR } from 'assets/data/constants';
import Utils from 'utils';

const UserList = () => {
  const [filter, setFilter] = useState('');
  const users = useSelector((state) => state.users.users);
  const filteredUsers = useMemo(
    () => Utils.wildCardSearch(users, filter),
    [users, filter]
  );
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();

  const deleteUser = (userId) => {
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    setFilter(value);
  };
  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={MOCK_AVATAR}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a < b ? -1 : b < a ? 1 : 0;
        },
      },
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a < b ? -1 : b < a ? 1 : 0;
        },
      },
    },
    {
      title: 'company',
      dataIndex: 'company',
      render: (company) => company.name,
      sorter: {
        compare: (a, b) => {
          a = a.company.name[0].toLowerCase();
          b = b.company.name[0].toLowerCase();
          return a < b ? -1 : b < a ? 1 : 0;
        },
      },
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => <Tag className="text-capitalize">{id}</Tag>,
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showUserProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <Card bodyStyle={{ padding: '20px' }}>
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <div className="mr-md-3 mb-3">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={(e) => onSearch(e)}
          />
        </div>
      </Flex>
      <Table columns={tableColumns} dataSource={filteredUsers} rowKey="id" />
      <UserView
        data={selectedUser}
        visible={userProfileVisible}
        close={() => {
          closeUserProfile();
        }}
      />
    </Card>
  );
};

export default UserList;
