import React, { useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../AuthContext/authcontext';
import {message} from 'antd';


const TodoDialogue = ({ mode, type }) => {
  const { setRefetch } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("type",type)

  const { register, handleSubmit, reset } = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (data) => {
    console.log('Form Data:', data);

    try {
      const endpointMap = {
        todo: 'http://localhost:5000/api/tasks/todo',
        inprogress: 'http://localhost:5000/api/tasks/inprogress',
        done: 'http://localhost:5000/api/tasks/done',
      };

      console.log("idhr se gya data",data)
      const response = await axios.post(endpointMap[type], data);
      console.log('Response:', response.data);
      message.success('Task added successfully!');

      setIsModalOpen(false);
      reset();

      setRefetch(true);
    } catch (error) {
      console.error('Error adding task:', error);
      message.error('Failed to add task. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  return (
    <>
      <Button
        className="border-none font-bold text-[1rem]"
        onClick={showModal}
        style={{
          color: mode ? '#000000' : '#ffffff',
          background: mode ? '#ffffff' : '#2A2B2F',
        }}
      >    Add New Task
      </Button>
      <Modal
        title="Add New Task"
        open={isModalOpen}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
        className={mode ? 'light-modal' : 'dark-modal'}
      >
        <div className="p-4">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleOk)}>
            {/* username*/}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Username</label>
              <input
                {...register('username', { required: true })}
                type="text"
                placeholder="Enter username"
                className="border rounded p-2"
              />
            </div>
            {/* Task Title */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Task Title</label>
              <input
                {...register('taskTitle', { required: true })}
                type="text"
                placeholder="Enter task title"
                className="border rounded p-2"
              />
            </div>

            {/* Associated */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Associate With</label>
              <textarea
                {...register('associated')}
                placeholder="Enter task Association"
                className="border rounded p-2"
              />
            </div>

            {/* Progress */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Progress (%)</label>
              <input
                {...register('progress', { valueAsNumber: true,
                  validate: value =>(value >= 0 && value <= 100)  || 'Progress cannot exceed 100%' 
                 })}
                type="number"
                placeholder="Enter progress percentage"
                className="border rounded p-2"
                defaultValue={0}
              />
            </div>

            {/* Assign Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Assign Date</label>
              <input
                {...register('assignDate')}
                type="date"
                className="border rounded p-2"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TodoDialogue;
