import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;
    return (
        <div>
            <h2 className="text-center">Update a coffee {name}</h2>

            <form>
                {/* name and quantity */}
                <div className="flex align-middle justify-center gap-11 mx-auto mb-8">
                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your coffee name?</span>
                            </div>
                            <input type="text" name="name" defaultValue={name} className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Quantity</span>
                            </div>
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>

                {/* supplier and taste */}
                <div className="flex align-middle justify-center gap-11 mx-auto mb-8">
                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Supplier</span>
                            </div>
                            <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" defaultValue={taste} className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>
                </div>


                {/* category & details */}
                <div className="flex align-middle justify-center gap-11 mx-auto mb-8">
                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" defaultValue={category} className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" defaultValue={details} className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className="flex align-middle justify-center border-red-300 mx-auto w-full items-center mb-8">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C] md:w-3/4" />
                </div>
            </form>

        </div>
    );
};

export default UpdateCoffee;