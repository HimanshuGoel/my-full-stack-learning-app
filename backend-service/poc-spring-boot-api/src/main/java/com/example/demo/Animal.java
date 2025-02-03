package com.example.demo;

public abstract class Animal {


    public Animal(String color) {
        this.color = color;
    }

    private String color;

    public String getColor() {
        return color;
    }

    

    public void setColor(String color) {
        this.color = color;
    }
}
