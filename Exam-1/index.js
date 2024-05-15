let Employee_Data = [];
let count = 0;
let t_salary = 0;

const Hire = (e) => {

    e.preventDefault();

    count++;

    let name = document.getElementById("user").value;
    let job = document.getElementById("jobrole").value;
    let dep = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;
    let work = document.getElementById("Experience").value;
    let email = document.getElementById("email").value;

    let data = {
        name: name,
        job: job,
        dep: dep,
        salary: salary,
        work: work,
        email: email,
    };

    Employee_Data.push(data);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = job;
    let td3 = document.createElement("td");
    td3.innerHTML = dep;
    let td4 = document.createElement("td");
    td4.innerHTML = salary;
    t_salary += parseInt(salary);
    let td5 = document.createElement("td");
    td5.innerHTML = work;
    let td6 = document.createElement("td");
    td6.innerHTML = email;
    let role = document.createElement("td");

    let td7 = document.createElement("td");
    td7.style.backgroundColor = "red";
    td7.style.cursor = "pointer";
    td7.innerHTML = "DELETE";


    td7.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        document.getElementById("total_emp").innerHTML = --count;
        t_salary -= parseInt(salary);
        document.getElementById("total_salary").innerHTML = t_salary;
    })
    document.getElementById("tbodyData").append(tr)


    const HandleDeleteAll = () => {
        document.getElementById('tbodyData').innerHTML = "";
        document.getElementById("total_emp").innerHTML = 0;
        document.getElementById("total_salary").innerHTML = 0;
        Employee_Data = [];
        count = 0;
        t_salary = 0;
    }
    document.getElementById("DeleteAll").addEventListener("click", HandleDeleteAll)



    work > 5 ?
        role.innerHTML = "Senior" :
        role.innerHTML = "Junior";
    tr.append(td1, td2, td3, td4, td5, td6, role, td7);

    document.getElementById("tbodyData").append(tr);
    document.getElementById("total_emp").innerHTML = count;
    document.getElementById("total_salary").innerHTML = t_salary;


}

    document.getElementById("Employee_info").addEventListener("submit", Hire);