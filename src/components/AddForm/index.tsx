import { FC } from 'react';
import {
  Card,
  Button,
  Checkbox,
  Form,
  Input,
} from 'antd';
import NotesService from '../../services/localStorage/NotesService';
import { updateNoteList } from '../../services/redux/Note';
import { useAppDispatch } from '../../services/redux/store';

const AddForm: FC = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    NotesService.addNote(values);

    dispatch(updateNoteList());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        title="Add Note"
        style={{
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ archived: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Note title...' }]}
          >
            <Input
              id="title"
            />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: 'Note body...' }]}
          >
            <Input.TextArea
              id="body"
            />
          </Form.Item>

          <Form.Item name="archived" valuePropName="checked" wrapperCol={{ span: 8 }}>
            <Checkbox>Archived ?</Checkbox>
          </Form.Item>

          <Form.Item 
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddForm;
