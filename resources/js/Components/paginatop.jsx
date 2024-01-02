import { Link } from '@inertiajs/react';
const Paginator = ({ meta }) => {

    // console.log(meta)
    const prev_1 = meta.links[1].ur;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group mx-3">

            {prev && <Link href={prev} className="btn btn-outline btn-sm mx-5">«Back</Link>}
            <button className=" h-1 rounded px-10 py-1">Page {current}</button>
            {next && <Link href={next} className="btn btn-outline btn-sm mx-5">Next»</Link>}
        </div>
    );
};

export default Paginator;
