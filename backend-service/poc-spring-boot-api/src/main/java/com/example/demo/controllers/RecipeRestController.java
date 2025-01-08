package com.example.demo.controllers;

import com.example.demo.models.Recipe;
import com.example.demo.repositories.ReceipeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recipes")
public class RecipeRestController {

  @Autowired
  private ReceipeJpaRepository receipeJpaRepository;

  @GetMapping("")
  public List<Recipe> listRecipes() {
    return receipeJpaRepository.findAll();
  }

  @GetMapping("/{id}")
  public Recipe getRecipe(@PathVariable Long id) {
    return receipeJpaRepository.getReferenceById(id);
  }

  @PostMapping("")
  public Recipe createRecipe(@RequestBody Recipe recipe) {
    return receipeJpaRepository.save(recipe);
  }

  @PutMapping("/{id}")
  public Recipe updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
    Recipe existingRecipe = receipeJpaRepository.getReferenceById(id);
    existingRecipe.setName(recipe.getName());
    existingRecipe.setDescription(recipe.getDescription());
    return receipeJpaRepository.save(existingRecipe);
  }

  @DeleteMapping("/{id}")
  public void deleteRecipe(@PathVariable Long id) {
    receipeJpaRepository.deleteById(id);
  }
}
