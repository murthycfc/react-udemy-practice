import { Link, useNavigate,redirect, useParams, useSubmit } from 'react-router-dom';


import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const submit = useSubmit();

  const {data, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id:params.id })
  })

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () =>{
    //   queryClient.invalidateQueries({
    //     queryKey:['events'],
    //   })
    // }
    onMutate: async (data)=>{
      const NewEvent = data.event;

      await queryClient.cancelQueries({queryKey:['events',params.id]})
      const prevEvent = queryClient.getQueryData(['events',params.id ]);
      queryClient.setQueryData(['events',params.id ],NewEvent );
      return {prevEvent}
    },
    onError: (error, data, context)=>{
      queryClient.setQueryData(['events',params.id ],context.prevEvent);
    },
    onSettled:()=>{
      queryClient.invalidateQueries(['events', params.id])
    }
  })

  function handleSubmit(formData) {
    // mutate({id: params.id, event: formData});
    // navigate('../')
    submit(formData, {method: 'PUT'});
  }

  function handleClose() {
    navigate('../');
  }
  let content;

  if(isError){
    content = <>
      <ErrorBlock title="Failed to load"  message={error.info?.message}/>
      <div className='form-actions'>
        <Link to="../" className='button'>
            Okay
        </Link>
      </div>
    </>
  }

  if(data){
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
        {content}
    </Modal>
  );
}


export function loader({params}){
    return queryClient.fetchQuery({
      queryKey: ['events', params.id],
      queryFn: ({signal}) => fetchEvent({signal, id:params.id })
    })
}

export async function action({request, params}){
    const formData = await request.formData();
    const updatedEvent = Object.fromEntries(formData);
    await updateEvent({id: params.id, event: updatedEvent});
    await queryClient.invalidateQueries(['events' ])
    return redirect('../')
}