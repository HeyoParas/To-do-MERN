import React, { useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../AuthContext/authcontext';
import { message } from 'antd';
import edit from '../assets/edit.svg';

const editDialogue = ({ mode, id }) => {
  const { register, handleSubmit, reset } = useForm();
  console.log("id:", id);
  const { data ,setRefetch } = useContext(AuthContext);
  console.log("auth data in edit dialogue :",data)
  const [isModalOpen, setIsModalOpen] = useState(false);

  let TT, A , P;
  const allKeys = [data.todo, data.inProgress, data.done];
  const task = allKeys.forEach(item =>
    {
      // console.log("this task",item);
      let index = item.findIndex(task => 
        {
         if( task._id.toString() === id )
         {
          TT = task.taskTitle;
          A = task.associated;
          P = Number(task.progress);
         }
        });

    });

  const [taskTitle,setTaskTitle] = useState(TT)
  const [associated,setAssociated] = useState(A)
  const [progress,setProgress] = useState(P)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const updateInfo = () => {

  }

  const handleOk = async (data) => {
    console.log('Form Data:', data);

    try {
      const response = await axios.patch( `http://localhost:5000/api/update/tasks/${id}`,data);
      message.success('Task updated successfully!');

      setIsModalOpen(false);
      reset();

      setRefetch(true);
    } catch (error) {
      message.error('Failed to update task. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  return (
    <>
      <button className="rounded-full hover:bg-slate-50" 
        style={{
          filter: mode ? "none" : "invert(1) brightness(0.8)",
        }}
        onClick={showModal}
      >
        <img src={edit} alt="edit" />
      </button>
      <Modal
        title="Edit Task"
        open={isModalOpen}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <div className="p-4">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleOk)}>
            {/* Task Title */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Task Title</label>
              <input
                {...register('taskTitle', { required: true })}
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e)=>{setTaskTitle(e.target.value)}}
                className="border rounded p-2"
              />
            </div>

            {/* Associated */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Associate With</label>
              <textarea
                {...register('associated')}
                placeholder="Enter task Association"
                value={associated}
                onChange={(e)=>{setAssociated(e.target.value)}}
                className="border rounded p-2"
              />
            </div>

            {/* Progress */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Progress (%)</label>
              <input
                {...register('progress', { valueAsNumber: true })}
                type="number"
                placeholder="Enter progress percentage"
                value={progress}
                onChange={(e)=>{setProgress(e.target.value)}}
                className="border rounded p-2"
                defaultValue={0}
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default editDialogue;
