import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Your coffee has been updated successfully.",
                    icon: "success"


                });
            }
        })
    }
    return (
        <div>
            <h2 className="text-center">Update a coffee {name}</h2>

            <form onSubmit={handleUpdateCoffee}>
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