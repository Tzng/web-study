import type { DatePickerProps } from 'antd';
import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import { useState } from 'react';
import styles from './index.less';

const TodoList: React.FC = () => {
  const onChange: DatePickerProps['onChange'] = () => {};
  const [checked, setChecked] = useState(false);
  const clean = () => {
    console.log('清楚已完成');
  };
  const checkedAll = () => {
    console.log('全部已完成');
  };
  return (
    <>
      <Form name="list" labelCol={{ span: 8 }}>
        <Form.Item className={styles.zlWL_zl_sb}>
          <Input placeholder="添加任务" />
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
        <Form.Item name="task" valuePropName="checked" className="styles.Item">
          <Checkbox onClick={() => setChecked(true)}>任务一</Checkbox>
          <DatePicker onChange={onChange} />
        </Form.Item>
        <Checkbox onClick={checkedAll} style={{ textDecoration: checked ? lineThrough : '' }}>
          已完成7/全部10
        </Checkbox>
        <Button onClick={clean}>清除已完成</Button>
        <Button onClick={clean}>隐藏已完成</Button>
      </Form>
    </>
  );
};
export default TodoList;
