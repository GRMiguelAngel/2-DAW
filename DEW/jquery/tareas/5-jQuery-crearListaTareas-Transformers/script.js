$(document).ready(function() {
    const $nuevaTarea = $('#nueva-tarea');
    const $listaTareas = $('#lista-tareas');
 
 
    $('#agregar-tarea').click(function() {
        const tarea = $nuevaTarea.val().trim();
        if (tarea) {
            agregarTarea(tarea);
            $nuevaTarea.val('');
        } else {
            alert('Para añadir una misión debe de tener nombre.');
        }
    });
 
 
    $(document).on('click', '.editar-tarea', function() {
        const tareaElemento = $(this).prev('.tarea-texto');
        const nuevaTareaTexto = prompt('Editando:', tareaElemento.text());
        if (nuevaTareaTexto) {
            tareaElemento.text(nuevaTareaTexto);
        }
    });
 
 
    $(document).on('click', '.eliminar-tarea', function() {
        $(this).parent().remove();
    });
 
 
    $('#limpiar-tareas').click(function() {
        $listaTareas.empty();
    });
     
 
    function agregarTarea(tarea) {
        const tareaHTML = `
            <li>
                <span class="tarea-texto">${tarea}</span>
                <button class="editar-tarea">Editar</button>
                <button class="eliminar-tarea">Eliminar</button>
            </li>`;
        $listaTareas.append(tareaHTML);
    }
 });
 