import React, { useEffect, useState } from 'react';
import { Ticket } from '../../ticket.types';
import axios from 'axios';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { Button, Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

type TicketPageProps = {
  editMode: boolean;
};

export const TicketPage = ({ editMode }: TicketPageProps) => {
  const { currentColor, categories } = useStateContext();

  const [formData, setFormData] = useState<Ticket>({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
    avatar: '',
    category: '',
    description: '',
    owner: '',
    priority: 0,
    title: '',
  });
  const navigate = useNavigate();
  let { id }: Readonly<Params<string>> = useParams();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editMode) {
      const response = await axios.put(`http://localhost:8000/tickets/${id}`, {
        data: formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate('/');
      }
    }
    if (!editMode) {
      const response = await axios.post('http://localhost:8000/tickets', {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate('/');
      }
      if (response.status !== 200) console.log(response.status);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/tickets/${id}`);
    setFormData(response.data.data);
  };
  useEffect(() => {
    if (editMode) fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-10 rounded-2xl m-5'>
      <Header category='Tickets' title={editMode ? 'Update your Ticket' : 'Create a Ticket'} />
      <form className='flex gap-5' onSubmit={handleSubmit}>
        <div className='flex-col flex gap-5'>
          <label>
            Title
            <input
              className='px-2 py-1 block'
              onChange={handleChange}
              type='text'
              name='title'
              required={true}
              value={formData.title}
            />
          </label>

          <label>
            Description
            <input
              className='px-2 py-1 block'
              onChange={handleChange}
              type='text'
              name='description'
              required={true}
              value={formData.description}
            />
          </label>
          <div className='border-1 border-zinc-200 p-5 rounded-lg'>
            <label>
              Category
              <select
                className='px-2 py-1 block border-1 border-gray-600 rounded-lg mb-4'
                name='category'
                onChange={handleChange}
                value={formData.category}
              >
                {categories?.map((item, index) => (
                  <option defaultValue={item[0]} value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              or New Category
              <input
                className='px-2 py-1 block'
                onChange={handleChange}
                type='text'
                name='category'
                value={formData.category}
              />
            </label>
          </div>
          <div>
            <label className='flex gap-3'>
              Priority
              <label>
                <input
                  type='radio'
                  name='priority'
                  onChange={handleChange}
                  value={1}
                  checked={formData.priority == 1}
                />
                1
              </label>
              <label>
                <input
                  type='radio'
                  name='priority'
                  onChange={handleChange}
                  value={2}
                  checked={formData.priority == 2}
                />
                2
              </label>
              <label>
                <input
                  type='radio'
                  name='priority'
                  onChange={handleChange}
                  value={3}
                  checked={formData.priority == 3}
                />
                3
              </label>
              <label>
                <input
                  type='radio'
                  name='priority'
                  onChange={handleChange}
                  value={4}
                  checked={formData.priority == 4}
                />
                4
              </label>
              <label>
                <input
                  type='radio'
                  name='priority'
                  onChange={handleChange}
                  value={5}
                  checked={formData.priority == 5}
                />
                5
              </label>
            </label>
          </div>
          {editMode && (
            <>
              <input
                className='px-2 py-1 block'
                type='range'
                name='progress'
                min='0'
                max='100'
                onChange={handleChange}
                value={formData.progress}
              />
              <label>
                Status
                <select name='status' onChange={handleChange} value={formData.status}>
                  <option selected={formData.status == 'done'} value='done'>
                    Done
                  </option>
                  <option selected={formData.status == 'working on it'} value='working on it'>
                    Working on it
                  </option>
                  <option selected={formData.status == 'stuck'} value='stuck'>
                    Stuck
                  </option>
                  <option selected={formData.status == 'not started'} value='not started'>
                    Not started
                  </option>
                </select>
              </label>
            </>
          )}
          <Button bgColor={currentColor} text='Add' borderRadius='10px' size='md' color='white' />
        </div>
        <div className='flex flex-col gap-5'>
          <label>
            Owner
            <input
              className='px-2 py-1 block'
              name='owner'
              type='text'
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />
          </label>
          <label>
            Avatar
            <input className='px-2 py-1 block' name='avatar' type='url' onChange={handleChange} />
          </label>
          <div className='rounded-full w-32 h-32 overflow-hidden'>
            {formData.avatar && <img src={formData.avatar} alt='user pic' />}
          </div>
        </div>
      </form>
    </div>
  );
};
