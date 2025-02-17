/**
 * @fileoverview This file contains the MessagesService class which is responsible for managing messages.
 */

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages = signal<string[]>([]);
  // Read all messages as a readonly signal.
  allMessages = this.messages.asReadonly();

  /**
   * Adds a new message to the list of messages.
   * @param message The message to be added.
   */
  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
