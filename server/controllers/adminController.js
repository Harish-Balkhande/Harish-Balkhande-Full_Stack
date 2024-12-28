import Admin from "../models/admin/adminModel.js";

export const saveLiveData = async (req, res) => {
    try {
        const { runs, wickets, over, currentBallIndex, ballScores, rec_id } = req.body;
        console.log("id : ", rec_id);

        if (rec_id === 0) {
            // Create new document if rec_id is 0
            const newData = new Admin({
                runs,
                wickets,
                currentOver: over,
                currentBallIndex,
                allOversScoreList: ballScores // array
            });

            const isSaved = await newData.save(); // Wait for the document to be saved
            console.log(isSaved);

            if (isSaved) {
                res.status(200).json({ status: "success", rec_id: isSaved._id });
            } else {
                res.status(500).json({ status: "failed", message: "Failed to save new data" });
            }
        } else {
            // Update existing document if rec_id is provided
            const updateData = await Admin.findByIdAndUpdate(
                rec_id, // The ID to update
                {
                    runs,
                    wickets,
                    currentOver: over,
                    currentBallIndex,
                    allOversScoreList: ballScores
                },
                { new: true } // Ensure we get the updated document
            );

            if (updateData) {
                res.status(200).json({ status: "success", rec_id: updateData._id });
            } else {
                res.status(404).json({ status: "failed", message: "Record not found for update" });
            }
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ status: "failed", message: error.message });
    }
};



// // CREATE a new user
// export const createUser = async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     const newUser = new User({
//       name,
//       email,
//       age,
//     });

//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // READ all users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // READ a single user by ID
// export const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // UPDATE user by ID
// export const updateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // DELETE user by ID
// export const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
