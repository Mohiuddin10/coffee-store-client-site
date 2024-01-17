
const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0] mb-8 pb-11">
            <h2 className="text-3xl font-extrabold text-center mb-8">Add a coffee</h2>
            <form className="">
                {/* name and quantity */}
                <div className="flex align-middle justify-center gap-11 mx-auto mb-8">
                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your coffee name?</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Coffee Quantity" className="input input-bordered w-full max-w-xs" />
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
                            <input type="text" name="supplier" placeholder="Coffee name" className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Coffee Quantity" className="input input-bordered md:w-full max-w-xs" />
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
                            <input type="text" name="category" placeholder="Coffee category" className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="">
                        <label className="form-control md:w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Coffee details" className="input input-bordered md:w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className="flex align-middle justify-center border-red-300 mx-auto w-full items-center mb-8">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="file" name="photo" placeholder="Coffee photo" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
            </form>
            <div className="flex justify-center">
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] md:w-3/4" />
            </div>

        </div>
    );
};

export default AddCoffee;