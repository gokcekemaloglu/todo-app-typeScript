import Swal from 'sweetalert2'

export const enum SweetAlertIcons {
    WARNING= "warning",
    ERROR = "error",
    SUCCESS = "success"
}

export const notify = (msg: string, icon: SweetAlertIcons) => Swal.fire({
    title: 'Todo App!',
    text: msg,
    icon: icon,
    confirmButtonText: 'Ok',
    timer: 5000,
    timerProgressBar: true
  })