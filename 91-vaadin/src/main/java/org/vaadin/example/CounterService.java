package org.vaadin.example;

import java.io.Serializable;
import java.util.concurrent.CompletableFuture;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class CounterService implements Serializable {

    private int count = 0;

    public String greet(String name) {
        if (name == null || name.isEmpty()) {
            return "Hello anonymous user";
        } else {
            return "Hello " + name;
        }
    }

    public int getCount() {
        return count;
    }

    public void increase() {
        count++;
    }    
    
    @Async
    public CompletableFuture increaseAsync() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        count++;
        return CompletableFuture.completedFuture(null);
    }
}
