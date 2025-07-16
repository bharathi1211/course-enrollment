import Staff from "#models/staff";

export default class StaffRepository {
   static async create(staffData : any) {
      const staff = await Staff.create({
        staffId: Number(staffData.staff_id),
        department: staffData.department,
        staffName: staffData.staff_name
        });
      return staff;
  }

  static async fetchAll(){
      const staff = await Staff.all()
      console.log(staff);
      return staff;
  }
  
  static async fetchById(id: number){
      const staff = await Staff.findOrFail(id);
      return staff;
  }

  static async update(id: number, staffData: any) {
    const staff = await Staff.findOrFail(id);
    staff.merge({
      staffName: staffData.staff_name,
      department: staffData.department
    });
    return staff.save();
}

  static async delete(id: number) {
    const staff = await Staff.findOrFail(id);
    return staff.delete();
  }
}