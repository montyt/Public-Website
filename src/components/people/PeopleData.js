import { getMembers } from "../../api/api";

export const getMemberData = async () => {
  const members = await getMembers();

  let EXEC = [];
  let CRM = [];
  let DS = [];
  let PS = [];

  members.forEach(member => {
    if (member.team == "EXEC") {
      CRM.push(member);
    }
    else if (member.team == "CRM") {
      CRM.push(member);
    } else if (member.team == "DS") {
      DS.push(member);
    } else if (member.team == "PS") {
      PS.push(member);
    }
  });

  return { EXEC, CRM, DS, PS };
};

export default { getMemberData };
