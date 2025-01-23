import React, { useState,useContext } from 'react';
import ReactDOM from 'react-dom'; 
import more from '../assets/More.svg';
import hamburger from '../assets/hamburger.svg';
import comment from '../assets/comment.svg';
import link from '../assets/link.svg';
import DeletePopUp from '../antd/deletePopUp';
import { AuthContext } from '../AuthContext/authcontext';
import axios from 'axios';

import '../index.css';
import { message, Popconfirm } from 'antd';

const TodoContent = ({ mode, data }) => {
  console.log("data in todocontent",data);

  formatAssignDate(data);
  
  const [deleteVisible, setDeleteVisible] = useState(false); 
     const{x,setRefetch} = useContext(AuthContext);
  

  const deleteTask = async (id) => {
    console.log(id)
    try {
      const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      if (response.status === 200) {
        message.success('Task deleted successfully');
        setRefetch(true);
      }
    } catch (error) {
      message.error('Failed to delete task');
      console.error('Error deleting task:', error);
    }
  };
  function formatAssignDate(task) {
    const date = new Date(task.assignDate); // Convert to Date object
    const options = { month: 'short', day: '2-digit', year: 'numeric' }; // Formatting options
    task.assignDate = date.toLocaleDateString('en-US', options).replace(',', ''); // Format and remove the comma
    return task;
}

  return (
    <div className='gap-y-1 space-y-4 p-2'>
      <div className='flex items-center justify-between'>
        <div>
          <div className="text-md font-bold">{data?.taskTitle}</div>
          <div className='text-gray-800 text-opacity-60'
            style={{
              color: mode ? "#949598" : "#ffffff",
            }}
          >
            {data?.associated}
          </div>
        </div>
        <div>
          <Popconfirm
            title="Are you sure you want to delete this task?"
            open={deleteVisible}
            onConfirm={() => deleteTask(data?._id)}
            onCancel={() => setDeleteVisible(false)} 
            okText="Yes"
            cancelText="No"
            onVisibleChange={(visible) => setDeleteVisible(visible)} 
          >
            <button className="rounded-full hover:bg-slate-50">
              <img src={more} alt="more" />
            </button>
          </Popconfirm>
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between mb-1'>
          <div className='flex text-sm font-bold text-gray-800 text-opacity-60'
            style={{
              color: mode ? "#949598" : "#ffffff",
            }}
          >
            <button className="rounded-full hover:bg-slate-50"
              style={{
                filter: mode ? "none" : "invert(1) brightness(0.8)",
              }}
            >
              <img src={hamburger} alt="hamburger" />
            </button>
            Progress
          </div>
          <div className='text-sm font-bold'>{data?.progress}/100</div>
        </div>
        <div className='flex items-center justify-center w-full'>
          <progress className='rounded-progress' value={data?.progress} max="100" style={{ width: '90%' }}></progress>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='bg-slate-200 rounded-full px-1 font-bold text-gray-400'>{data?.assignDate || data?.createdAt}</div>
        <div className='flex items-center gap-x-4'
          style={{
            filter: mode ? "none" : "invert(1) brightness(0.8)",
          }}
        >
          <div className='flex'>
            <button className="rounded-full hover:bg-slate-50">
              <img src={comment} alt="comment" />
            </button>
            6
          </div>
          <div className='flex'>
            <button className="rounded-full hover:bg-slate-50">
              <img src={link} alt="link" />
            </button>
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContent;
