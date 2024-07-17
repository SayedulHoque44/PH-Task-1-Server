
import catchAsync from "../../utils/catchAsync";
import { UserModel } from "./user.model";



export const creatUser = catchAsync(async (req, res) => {
  
  const user = await UserModel.create(req.body)

    res.send({
      statusCode: 201,
      success: true,
      message: "Create User Success",
      data: user,
    });
  });





