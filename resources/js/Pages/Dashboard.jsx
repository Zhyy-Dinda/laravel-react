import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/navbar";
import CardNews from "@/Components/CardNews";
import Paginator from "@/Components/paginatop";

export default function Dashboard(props) {
  // console.log('isi dari props =', props);
    return (
        <div className="min-h-screen  bg-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* <p className="text-4xl text-center">{props.description}</p> */}
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 p-10 items-center  justify-center">
              <CardNews news={props.data.news}/>
            </div>
            <div className="items-center justify-center flex pb-7">
              <Paginator meta={props.news.meta}/>
              
            </div>
        </div>
    );
}
