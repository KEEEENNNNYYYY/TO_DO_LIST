import React, { useState } from "react";
import "../src/App.css"; // Assurez-vous d'importer votre fichier de styles CSS

export default function App() {
  // Initialisation du tableau task avec sa fonction de mise à jour
  const [task, setTask] = useState([]);
  // Initialisation de la priorité avec sa fonction de mise à jour
  const [priority, setPriority] = useState("Low");
  // Variable pour stocker la valeur actuelle de l'input
  const [currentTask, setCurrentTask] = useState("");

  // Limite de caractères pour l'input
  const maxLength = 25; // Par exemple, limite de 50 caractères

  // Fonction qui va gérer les valeurs des inputs
  function handleInput(event) {
    // Vérifier si la longueur dépasse la limite
    if (event.target.value.length <= maxLength) {
      // Mettre à jour la valeur actuelle de l'input
      setCurrentTask(event.target.value);
    }
    // Si la limite est dépassée, ne rien faire (ou fournir un feedback à l'utilisateur)
  }
  
  // Fonction qui va ajouter la tâche courante à la liste des tâches
  function handleClick() {
    // Ajouter la tâche courante à la liste des tâches avec sa priorité
    setTask([...task, { text: currentTask, priority }]);
    // Effacer l'input après avoir ajouté la tâche
    setCurrentTask("");
  }
  
  // Fonction pour supprimer une tâche par index
  function deleteTask(index) {
    const updatedTasks = task.filter((_, idx) => idx !== index);
    setTask(updatedTasks);
  }

  // Fonction pour mettre à jour la priorité
  function handlePriority(event) {
    setPriority(event.target.value);
  }

  // Affichage du résultat
  return (
    <div className="container">
      <h1>Task:</h1>
      <input 
        className="inputPlace"
        value={currentTask}
        onChange={handleInput} 
        maxLength={maxLength} // Limite de caractères
      />
      <div className="buttonContainer">
        <button
          className="putButton"
          onClick={handleClick}
        >
          Add task
        </button>
        <details>
          <summary>Priority</summary>
          <select onChange={handlePriority}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </details>
      </div>
      
      <div className="taskContainer">
        <h1>Task list:</h1>
        {/* Affichage des tâches */}
        <ul>
          {task.map((item, index) => (
            <div className={`listDisplay priority-${item.priority.toLowerCase()}`} key={index}>
              {item.text}
              <button
                className="deleteButton"
                onClick={() => deleteTask(index)}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
