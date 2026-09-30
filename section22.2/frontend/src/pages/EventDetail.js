import { useRouteLoaderData, useParams, redirect } from "react-router-dom"
import EventItem from "../components/EventItem";
export default function EventDetailPage(){


    const data = useRouteLoaderData('event-detail');
    console.log("data", data.event.title);
    return(
        <>
            <EventItem event={data.event}/>
        </>
    )
}

export async function loader({request, params}) {
    const id = params.eventId;
    console.log(id);
    const response = await fetch('http://localhost:8080/events/'+id)

    if(!response.ok){
        throw new Response(JSON.stringify({message: 'Failed to fetch event details'}), {status: 500})
    }   
    else{
        return response;
    }
}

export async function action({params, request}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id, {
        method: request.method
    });
    if(!response.ok){
        throw new Response(JSON.stringify({message: 'Failed to delete event'}), {status: 500})
    }   
    return redirect('/events');
}   